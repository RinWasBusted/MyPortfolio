import api from "./api";

export async function postProject({ title, description, date, tags, file }) {
  const thumbnailUrl = await uploadProjectThumbnail({ file });
  const projectData = {
    title,
    description,
    date,
    tags,
    thumbnailUrl,
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
    const picture = JSON.stringify(file);
    const response = await api.post("/api/projects/upload-thumbnail", {
      file: picture,
    });
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

export async function postNewProject() {
  try {
    const response = await api.post("/api/projects");
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}
