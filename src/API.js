const API = {
  base: 'http://localhost:3080',
}

export const creeeEtudiant = async (etudiant) => {
  try {
    await fetch(API.base + '/etudiant', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(etudiant),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export const getEtudiants = async () => {
  const response = await fetch(API.base + '/etudiant')
  const data = await response.json()
  return data
}
export const getEtudiant = async (cne) => {
  const response = await fetch(API.base + '/etudiant/' + cne)
  const data = await response.json()
  return data
}

export const getLogin = async (etudiant) => {
  const response = await fetch(API.base + '/login', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(etudiant),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  return data
}

export const getLoginAdmin = async (admin) => {
  const response = await fetch(API.base + '/admin/login', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(admin),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  return data
}

export const postDemande = async (type, obj) => {
  const res = await fetch(API.base + '/' + type, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(obj),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await res.json()
  return data
}

export const getDemandes = async (type) => {
  const res = await fetch(API.base + '/' + type)
  const data = await res.json()
  return data
}
export const getDemandesEtudiant = async (type, cne) => {
  const res = await fetch(API.base + '/' + type + '/etudiant/' + cne)
  const data = await res.json()
  return data
}
export const changeStatus = async (type, id, status) => {
  const res = await fetch(API.base + '/' + type + '/' + id + '/status', {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({ status: status }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
}
export const deleteStatus = async (type, id) => {
  const res = await fetch(API.base + '/' + type + '/' + id, {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
}
