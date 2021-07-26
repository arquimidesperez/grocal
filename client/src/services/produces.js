import api from './api-config'

export const getAllProduces = async () => {
  const resp = await api.get('/produces');
  return resp.data;
}

export const getOneProduce = async (id) => {
  const resp = await api.get(`/produces/${id}`);
  return resp.data;
}

export const postProduce = async (produceData) => {
  const resp = await api.post('/produces', {produce: produceData});
  return resp.data;
}

export const putProduce = async (id, produceData) => {
  const resp = await api.put(`/produces/${id}`, {produce: produceData});
  return resp.data;
}

export const deleteProduce = async (id) => {
  // try catch
  const resp = await api.delete(`/produces/${id}`);
  return resp;
}

export const addSeason = async (seasonId, produceId) => {
	const resp = await api.put(`/seasons/${seasonId}/produces/${produceId}`);
	return resp.data;
};