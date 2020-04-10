import admin from "firebase-admin";
import serviceAccount from "./../../postnote-9a13a-firebase-adminsdk-k4z7p-186ca0fa48.json"
import posts from './feed/_posts'

export async function get(req, res, next) {

  let db = admin.database()
  let dbRef = db.ref();
  await Promise.all(posts.map(post => {
    dbRef.child(post.slug).set(post)
  }))
  res.end("done")
}