import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import {catchError, map, Observable, of, tap} from "rxjs";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  /**
   * Represents a Cv stream
   */
  cvs$: Observable<Cv[]>;
  selectedCv$:Observable<Cv>;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {

    this.cvs$=this.cvService.getCvs().pipe(
      catchError((error)=>{
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`
        );
        // provide an alternative stream
        // wrap fake cvs (Cv[]) in of() to generate a stream (Observable<Cv[]>
        return of(this.cvService.getFakeCvs())
      })
    )

    this.selectedCv$=this.cvService.selectCv$

    this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
  }
}
