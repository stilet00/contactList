import {URL} from "../constants/urls";

export function getContacts() {
 return fetch(URL).then(res => res.json())
}
export function deleteContact(id) {
 return fetch(URL + id, {
  method: 'DELETE'
 }).then(res => res.json())
}
export function createContact(item) {
 return fetch(URL , {
  method: 'POST',
  body: JSON.stringify(item),
  headers: {
   'Content-type': 'application/json'
  }
 }).then(res => res.json())
}
export function editContact(item) {
 return fetch(URL + item.id , {
  method: 'PUT',
  body: JSON.stringify(item),
  headers: {
   'Content-type': 'application/json'
  }
 }).then(res => res.json())
}