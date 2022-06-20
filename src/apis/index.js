import axios from 'axios'

// axios.defaults.baseURL = 'https://61601920faa03600179fb8d2.mockapi.io'

const mainAxios = axios.create({
  baseURL: 'https://61601920faa03600179fb8d2.mockapi.io'
});
export const getUsersAPI = async () => mainAxios.get('/pegawai')

export const getUserByIdAPI = async (id) => mainAxios.get(`/users/${id}`)

export const createUserAPI = async (user) => mainAxios.post(`/pegawai`, user)

export const updateUserAPI = async (user) => mainAxios.put(`/pegawai/${user.id}`, user)

export const deleteUserByIdAPI = async (id) => mainAxios.delete(`/pegawai/${id}`)

const placeAxios = axios.create({
  baseURL: 'https://dev.farizdotid.com/api/daerahindonesia'
});

export const getDataDaerahAPI = async () => placeAxios.get(`/provinsi`)
export const getDataKotaAPI =  async (value) => placeAxios.get(`/kota?id_provinsi=${value.id}`)
export const getDataKecamatanAPI = async (id) => placeAxios.get(`/kecamatan?id_kota=${id}`)
export const getDataKelurahanAPI =  async (id) => placeAxios.get(`/kelurahan?id_kecamatan=${id}`)



