import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
let source = Observable.from(number);

/** */
class MyObservable implements Observer<number> {
    /*Ocurrio un evento muestra lo ocurrido*/ 
    next(value: number) {
        console.log(`ValueOK: ${value}`);
    };

    /**
     * Si ocurre un error este metodo mostrara los errores
     */
    error(err: any){
        console.log(`Error: ${err}`);
    };


    complete(){
        console.log(`Complete!!!!!!!!!!`);
    };

}

source.subscribe(new MyObservable);

//Lo siguiente hace lomismoque lo realizado arriba
/*source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);*/