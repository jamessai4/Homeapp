import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { product } from '../interfaces/product';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators'


@Component({
  selector: 'app-emore',
  templateUrl: './emore.page.html',
  styleUrls: ['./emore.page.scss'],
})
export class EmorePage implements OnInit {

  name: string
  products:product[]=[]
  isloading:boolean = false

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private loadingController: LoadingController,

  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    return loading
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => this.name = params.name)
  }

  async ionViewWillEnter() {
    const loading = await this.presentLoading()
    this.http.get(environment.endpoint + 'products/' + this.name)
    .pipe(finalize(async()=>await loading.dismiss()))
      .subscribe((res: any) => {
        this.products = res.data;
      })
  }

}

