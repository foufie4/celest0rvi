import { Component, OnInit } from '@angular/core';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

interface ImageData {
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  images: string[] = [];

  async fetchImages() {
    const querySnapshot = await getDocs(collection(db, "images"));
    querySnapshot.forEach((doc) => {
      const data = doc.data() as ImageData; // Cast des données
      this.images.push(data.url); // Ajout des URLs dans le tableau
    });
  }

  ngOnInit() {
    this.fetchImages();
  }
}