import admin from "firebase-admin"
import serviceAccount from './../../../../postnote-9a13a-firebase-adminsdk-k4z7p-186ca0fa48.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://postnote-9a13a.firebaseio.com"
});
export async function put(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.update({ html: content, title: title })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}

export async function post(req, res, next) {
  const { slug } = req.params;
  let { title, content, password } = req.body
  if (password === "") {
    let db = admin.database()
    let ref = db.ref().child(slug)
    await ref.set({ html: content, title: title, slug: slug })
    res.json({ state: "ok" })
  }
  else {
    res.json({ state: "password wrong" })
  }
}