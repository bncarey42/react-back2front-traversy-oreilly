import axios from 'axios'

const github = axios.create({
  baseURL: import.meta.env.VITE_GH_URL,
  headers: {
      Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`,
    }
});

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({ q: text });

  return await github.get(`/search/users?${params}`).then((res) => res.data.items);
};

export const getUserProfile = async (login: string) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`).then((res) => res.data),
    github.get(`/users/${login}/repos?${new URLSearchParams({
    sort: "created",
    per_page: "10",
  })}`).then((res) => res.data)]) 
  return { user: user, repos: repos };
};

