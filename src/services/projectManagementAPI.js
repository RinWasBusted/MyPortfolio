import api from "./api";

export async function postProject({ title, description, date, tags, thumbnailUrl }) {
  const thumbnail = await uploadProjectThumbnail({ file: thumbnailUrl });
  const projectData = {
    title,
    description,
    date,
    tags,
    thumbnailUrl: thumbnail || null,
  };

  try {
    const response = await api.post("/api/projects", projectData);
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

async function uploadProjectThumbnail({ file }) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await api.post("/api/projects/upload-thumbnail", formData);
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

export async function getProjectList() {
  try {
    const response = await api.get("/api/projects");
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

export async function deleteProject(id) {
  try {
    const response = await api.delete(`/api/projects/${id}`);
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

export async function getProjectById(id) {
  try {
    const response = await api.get(`/api/projects/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e.response.data.message);
    throw new Error(e.response.data.message);
  }
}

export async function putProjectById(id, { title, description, date, tags, thumbnailUrl }) {
  const thumbnail = typeof(thumbnailUrl) == 'string' || await uploadProjectThumbnail({ file: thumbnailUrl });
  const projectData = {
    title,
    description,
    date,
    tags,
    thumbnailUrl: thumbnail || null,
  };

  try {
    const response = await api.put(`/api/projects/${id}`, projectData);
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}