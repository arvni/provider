<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class DocumentController extends Controller
{
    public function upload($relatedClass, $relatedId, $tag, Request $request)
    {
        $file = $request->file("file");
        $doc = new Document([
            "originalFileName" => $file->getClientOriginalName(),
            "extension" => $file->getClientOriginalExtension(),
            "tag" => $tag
        ]);
        $doc->related()->associate(("\App\models\\" . ucfirst($relatedClass))::find($relatedId));
        $path = "$relatedClass/$relatedId/$tag";
        $doc->save();
        Storage::disk('local')->putFileAs($path, $file, "$doc->id.$doc->extension");
        return response()->json(["url" => route("download", $doc->id), "id" => $doc->id]);
    }

    public function download(Document $document)
    {
        return Response::download(storage_path("app/" . class_basename($document->related) . "/" . $document->related->id . "/" . $document->tag . "/" . $document->id . "." . $document->extension),
            null,
            [
                'Cache-Control' => 'no-cache, no-store, must-revalidate',
                'Pragma' => 'no-cache',
                'Expires' => '0',
            ],
            null);
    }
}
