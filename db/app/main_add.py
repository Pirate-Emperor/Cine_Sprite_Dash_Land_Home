import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./ServiceAccountKey.json")
app = firebase_admin.initialize_app(cred)

store = firestore.client()

doc_ref = store.collection(u'test')
doc_ref.add({u'name': u'test', u'added': u'just now'})