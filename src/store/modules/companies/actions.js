import axios from 'axios'
import { VERSION_API } from '@/configs/api'

const TENANTS = 'tenants'

const actions = {
    getCompanies({ commit }){
        return axios.get(`${VERSION_API}/${TENANTS}`).then(response => {
            commit('SET_COMPANIES',response.data)
        })
    }
}

export default actions