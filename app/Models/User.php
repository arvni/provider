<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Jobs\QueuedPasswordResetJob;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'userName',
        'email',
        'password',
        'meta',
        'mobile',
        'active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'meta'=>'json',
    ];

    public function Patients()
    {
        return $this->hasMany(Patient::class);
    }

    public function sendPasswordResetNotification ($token):void
    {
        QueuedPasswordResetJob::dispatch($this,$token);
    }
    public function Orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
    public function OrderMaterials(): HasMany
    {
        return $this->hasMany(OrderMaterial::class);
    }
}
