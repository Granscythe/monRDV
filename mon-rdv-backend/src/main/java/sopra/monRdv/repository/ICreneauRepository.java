package sopra.monRdv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sopra.monRdv.model.Creneau;

import java.util.List;

public interface ICreneauRepository extends JpaRepository<Creneau, Long>{
    @Query("select c from Creneau c where c.praticien.id = :id")
    List<Creneau> findAllByPraticien(@Param("id") Long id);

}
