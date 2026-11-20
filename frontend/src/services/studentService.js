import api from './api';

export const getStudents = async () => (await api.get('/students')).data;
export const getStudent = async (id) => (await api.get(`/students/${id}`)).data;
export const createStudent = async (student) => (await api.post('/students', student)).data;
export const updateStudent = async (id, student) => (await api.put(`/students/${id}`, student)).data;
export const deleteStudent = async (id) => (await api.delete(`/students/${id}`)).data;
