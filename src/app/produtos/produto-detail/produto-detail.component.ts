import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Produto } from '../produto'
import { ListaProdutoComponent } from '../lista-produto/lista-produto.component'
import { ProdutoService } from '../produtos.service'

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styles: []
})
export class ProdutoDetailComponent implements OnInit {
  product: Produto;
  constructor(
    private route: ActivatedRoute,
    private prodService: ProdutoService
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.prodService.getById(productIdFromRoute).subscribe(prod => {
      this.product = prod;
      debugger;
      // console.log("product detail - product: ", this.product);
    },
    error => console.log(error)
    );
    // const products = ListaProdutoComponent.prototype.produtos;
    // this.product = products.find(product => product.id === productIdFromRoute);
    
  }

}
