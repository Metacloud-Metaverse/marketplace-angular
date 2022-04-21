import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Item } from '../../entities/item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  items = Item.ITEMS;

  /* marketplace:any = [
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
    {
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'JEWEL Power75',
      cloud: '',
      rarity: '',
      categories: '',
      coordinates: '',
      lands: 3,
      genre: 0,
    },
  ] */

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Marketplace | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Pornland is the first metaverse designed to provide safe, secure and private virtual-reality venues for adult entertainment and real-life sexual fun.' }
    );
  }

}
