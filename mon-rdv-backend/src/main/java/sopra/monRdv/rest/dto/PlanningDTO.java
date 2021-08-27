package sopra.monRdv.rest.dto;

import sopra.monRdv.model.Creneau;
import sopra.monRdv.model.Praticien;

import java.util.List;

public class PlanningDTO {
    private Praticien praticien;
    private List<Creneau> creneau;

    public PlanningDTO() {
        super();
    }
}
