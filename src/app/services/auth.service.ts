import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth'; // ✅ correcto

import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {}

  async registrar(nombre: string, apellido: string, email: string, password: string): Promise<void> {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    const userDocRef = doc(this.firestore, `usuarios/${cred.user.uid}`);
    await setDoc(userDocRef, {
      uid: cred.user.uid,
      nombre,
      apellido,
      email,
    });
  }

  // ✅ Agrega este método
  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
