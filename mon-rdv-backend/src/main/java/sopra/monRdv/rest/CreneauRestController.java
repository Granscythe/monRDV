package sopra.monRdv.rest;

import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.monRdv.model.Creneau;
import sopra.monRdv.model.Views;
import sopra.monRdv.repository.ICreneauRepository;

@RestController
@RequestMapping("/creneau")
@CrossOrigin("*")
public class CreneauRestController {

	@Autowired
	@JsonView(Views.ViewCreneau.class)
	private ICreneauRepository creneauRepo;

	@GetMapping("")
	@JsonView(Views.ViewCreneau.class)
	public List<Creneau> findAll() {
		return creneauRepo.findAll();
	}
	
	@GetMapping("/patient/{id}")
	@JsonView(Views.ViewCreneauPatient.class)
	public List<Creneau> findAllCreneauPatient(@PathVariable Long id) {
		return creneauRepo.findAllCreneauPatient(id);
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewCreneau.class)
	public Creneau find(@PathVariable Long id) {

		Optional<Creneau> optCreneau = creneauRepo.findById(id);

		if (optCreneau.isPresent()) {
			return optCreneau.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewCreneau.class)
	public Creneau create(@RequestBody Creneau creneau) {
		creneau = creneauRepo.save(creneau);

		return creneau;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewCreneau.class)
	public Creneau update(@RequestBody Creneau creneau, @PathVariable Long id) {
		if (!creneauRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		creneau = creneauRepo.save(creneau);

		return creneau;
	}


	@DeleteMapping("/{id}")
	@JsonView(Views.ViewCreneau.class)
	public void delete(@PathVariable Long id) {
		if (!creneauRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		creneauRepo.deleteById(id);
	}
}
