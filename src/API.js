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
