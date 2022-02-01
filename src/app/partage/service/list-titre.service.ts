import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import { Titre } from 'src/app/model/Titre';

@Injectable({
  providedIn: 'root'
})
export class ListTitreService {
  private titres = new BehaviorSubject<string>('');

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  get titres$(): Observable<string> {
    return this.titres.asObservable();
  }

  updatedTitreList(data: string){
    this.titres.next(data);
  }

  fetch(): Observable<Titre[]> {
    return this.http.get<Titre[]>(this.urlServer.tousLesMusiques);
  }

  search(title: string): Observable<Titre[]> {
    return this.http.get<Titre[]>(this.urlServer.filterByTitle.replace(':title', title));
  }

  fetchRandom(): Observable<Titre> {
    return this.http.get<Titre>(this.urlServer.musiqueAleatoire);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.uneMusique.replace(':id', id));
  }

  create(musique: Titre): Observable<Titre> {
    return this.http.post<Titre>(this.urlServer.tousLesMusiques, musique);
  }

  fetchOne(id: string): Observable<Titre> {
    return this.http.get<Titre>(this.urlServer.unEmploye.replace(':id', id));
  }

  update(musique: Titre): Observable<Titre> {
    return this.http.put<Titre>(this.urlServer.unEmploye.replace(':id', musique.id), musique);
  }
}
