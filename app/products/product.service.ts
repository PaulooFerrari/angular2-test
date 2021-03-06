import { Injectable } from 'angular2/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "awdaiodjaiowjdoiajwdiojwaiodj adaw",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://www.lojadomecanico.com.br//mostra_foto.asp?foto=2/253/83527/Martelo-de-Unha-de-27mm-com-Cabo-de-Made-fortgpro-fg86301.JPG&largura=450&altura=450&d=08/04/2015085039"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "GDN-0048",
                "releaseDate": "March 12, 2016",
                "description": "xxx jaiowjdoiajwdiojwaiodj adaw",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://www.lojadomecanico.com.br//mostra_foto.asp?foto=2/253/83527/Martelo-de-Unha-de-27mm-com-Cabo-de-Made-fortgpro-fg86301.JPG&largura=450&altura=450&d=08/04/2015085039"
            }
        ]
    }
}