import Firebase from "./../api/firebase";

export default class Model {
  id;

  async _save(collection, id = null) {
    if (this.id != null) {
      this._update(collection);
    } else {
      this._store(collection, id);
    }
  }

  async _store(collection, id) {
    // Unset id field of user
    delete this.id;

    // save to database
    let res = null;

    if (id == null) {
      res = await Firebase.store
        .collection(collection)
        .add(Object.assign({}, this));

        // Restore id
        this.id = res.id;
    } else {
      res = await Firebase.store
      .collection(collection)
      .doc(id).set(Object.assign({}, this));

      // Restore id
      this.id = id;
    }

    return res;
  }

  async _update(collection) {
    let idBackUp = this.id;

    // Unset id field of user
    delete this.id;

    // save to database
    let res = await Firebase.store
      .collection(collection)
      .doc(idBackUp)
      .update(Object.assign({}, this));

    // Restore id
    this.id = idBackUp;
    return res;
  }
}
