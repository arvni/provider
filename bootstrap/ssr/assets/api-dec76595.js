import { useForm, router } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
const useSubmitForm = (defaultValues, route) => {
  const {
    data,
    setData,
    post,
    processing,
    setError,
    errors,
    clearErrors,
    reset,
    wasSuccessful
  } = useForm(defaultValues);
  const submit = (options) => {
    if (typeof route === "string") {
      post(route, options);
    }
  };
  const handleChange = (e) => {
    if (e && typeof e !== "string")
      setData(e.target.name, e.target.type == "checkbox" ? e.target.checked : e.target.value);
  };
  return {
    data,
    post,
    setData,
    processing,
    submit,
    setError,
    errors,
    clearErrors,
    handleChange,
    reset,
    wasSuccessful
  };
};
const uploadFiles = (url) => {
  const [progress, setProgress] = useState(0);
  const upload = (file) => {
    let formData = new FormData();
    formData.set("file", file);
    return axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress: (e) => setProgress(e.progress ?? 0)
    });
  };
  const resetProgress = () => setProgress(0);
  return { progress, upload, resetProgress };
};
const useChangePage = () => {
  const { processing, get: goto } = useForm();
  const get = (url) => goto(url);
  return {
    processing,
    get
  };
};
const usePageReload = (request, only = []) => {
  const [data, setData] = useState(request);
  const firstUpdate = useRef(true);
  const [processing, setProcessing] = useState(false);
  const reload = () => router.reload({
    only,
    data,
    onStart: activateProcessing,
    onFinish: deactivateProcessing
  });
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    reload();
  }, [data]);
  const onPageChange = (event, page) => {
    setData((prevData) => ({ ...prevData, page }));
  };
  const onPageSizeChange = (pageSize) => {
    setData((prevData) => ({ ...prevData, pageSize }));
  };
  const onFilterChange = (e) => {
    const { name, value } = e.target;
    let filter = changeObjectWithNestedName(name, value, (data == null ? void 0 : data.filter) ?? {});
    setData((prevData) => ({
      ...prevData,
      page: 1,
      filter
    }));
  };
  const onOrderByChange = (field, type) => {
    setData((prevData) => ({ ...prevData, orderBy: { field, type } }));
  };
  const get = (url) => {
    router.visit(url, {
      onStart: activateProcessing,
      onFinish: deactivateProcessing
    });
  };
  const activateProcessing = () => {
    setProcessing(true);
  };
  const deactivateProcessing = () => {
    setProcessing(false);
  };
  return { processing, reload, get, data, setData, onPageChange, onPageSizeChange, onFilterChange, onOrderByChange };
};
const useGetData = () => {
  const [loading, setLoading] = useState(false);
  async function getData(url, query) {
    setLoading(true);
    if (query) {
      url += "?" + new URLSearchParams(query).toString();
    }
    return axios.get(url).then(({ data }) => {
      setLoading(false);
      return data;
    });
  }
  return { getData, loading };
};
const useDelete = () => {
  const { post, processing } = useForm({ _method: "delete" });
  return { submit: post, processing };
};
function changeObjectWithNestedName(name, value, prevValues) {
  const output = { ...prevValues }, nestedProperties = name.split("."), lastPart = nestedProperties.pop();
  let currentObject = output;
  for (let i = nestedProperties.length - 1; i >= 0; i--) {
    if (nestedProperties[i]) {
      const property = nestedProperties[i];
      if (!currentObject[property]) {
        currentObject[property] = {};
      }
      currentObject = currentObject[property];
    }
  }
  if (lastPart)
    currentObject[lastPart] = value;
  return output;
}
export {
  useSubmitForm as a,
  usePageReload as b,
  useDelete as c,
  useChangePage as d,
  uploadFiles as e,
  useGetData as u
};
