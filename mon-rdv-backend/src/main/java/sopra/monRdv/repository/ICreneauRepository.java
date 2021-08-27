package sopra.monRdv.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.monRdv.model.Creneau;

public interface ICreneauRepository extends JpaRepository<Creneau, Long>{
	@Query("select c from Creneau c  where c.consultation.patient.id = :id")
	List<Creneau> findAllCreneauPatient(@Param("id") Long id);
	
	@Query("select c from Creneau c  where  c.dateCreneau >= :dateToday AND c.consultation.patient.id = :id")
	List<Creneau> findAllCreneauPatientFutur(@Param("id") Long id,@Param("dateToday") Date dateToday);
	
	@Query("select c from Creneau c  where  c.dateCreneau < :dateToday AND c.consultation.patient.id = :id ")
	List<Creneau> findAllCreneauPatientPasser(@Param("id") Long id,@Param("dateToday") Date dateToday);
}
