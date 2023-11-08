import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class recetasAPI {
    data: any[] | undefined;
    recetasArray: any[] = [];
    metaTittle: any[] = [];

    private loadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.loadingSubject.asObservable();


    constructor(private http: HttpClient) {
        this.fetchAllDataFromApis().then((data: any[]) => {

            this.data = data;

            // // Convertir this.data en un array de objetos desestructurado
            // this.recetasArray = this.data.map((item: any) => ({
            //   metaTitle: item.metaTitle,
            //   image: item.image,
            // }));

            // Desestructurar los datos de la receta
            const { receta, keys, autor, fecha, imagen, metaTittle, subtitle } = data[11].postMeta;

            // Asignar los datos a las variables
            //this.receta = receta;
            // this.keys = keys;
            // this.autor = autor;
            // this.fecha = fecha;
            // this.imagen = imagen;
            this.metaTittle = metaTittle;
            // this.subtitle = subtitle;

            // Mostrar los datos
            console.log('Data obtenida:');
            console.log(this.metaTittle);
            // console.log(this.keys);
            // console.log(this.autor);
            // console.log(this.fecha);
            // console.log(this.imagen);
            // console.log(this.metaTittle);
            // console.log(this.subtitle);


            console.log('Data obtenida:', this.recetasArray);
            //         console.log(`
            //     ---------------------
            //    |                     |
            //    |   ¡Ya hicimos la    |
            //    |  petición de data!  |
            //    |                     |
            //     ---------------------
            //             \\(^_^)/
            //   `);

        }).catch((error: any) => {
            console.error('Error al obtener data:', error);
        });
    }

    fetchAllDataFromApis(): Promise<any[]> {
        const apiUrl = 'https://cafeetrusca.com/api/blog?PageNumber=2&PageSize=9';
        // const apiPromise = this.fetchDataFromApi(apiUrl, 'recetas');

        return Promise.all(apiUrl);
    }

    private setLoading(isLoading: boolean) {
        this.loadingSubject.next(isLoading);
    }

    hasPassedADay(lastUpdate: string, currentDate: Date): boolean {
        const lastUpdateDate = new Date(lastUpdate);
        const oneDay = 24 * 60 * 60 * 1000; // Un día en milisegundos
        return currentDate.getTime() - lastUpdateDate.getTime() < oneDay;
    }

    formatDate(date: Date): string {
        return date.toISOString(); // Puedes cambiar el formato según tus preferencias
    }

    //Método para obtener la información procesada y formatear RecetasArray
    getRecetas(): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            const storedData = localStorage.getItem('data_recetas');

            if (storedData) {
                const parsedData = JSON.parse(storedData);
                resolve(parsedData);
            } else {
                this.fetchAllDataFromApis().then(() => {
                    resolve(this.recetasArray);
                }).catch((error: any) => {
                    reject(error);
                });
            }
        });
    }


}
