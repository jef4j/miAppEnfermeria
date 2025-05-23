import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async registerUser(nombre: string, apellido: string, email: string, password: string): Promise<void> {
    const cred: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);

    const userRef = doc(this.firestore, `enfermeros/${cred.user.uid}`);
    await setDoc(userRef, {
      uid: cred.user.uid,
      nombre,
      apellido,
      email
    });
  }
}
