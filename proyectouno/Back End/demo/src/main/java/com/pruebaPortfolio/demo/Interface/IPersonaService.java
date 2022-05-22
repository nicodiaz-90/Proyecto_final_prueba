package com.pruebaPortfolio.demo.Interface;

import com.pruebaPortfolio.demo.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto buscandolo por Id
    public void deletePersona(Long id);
    
    //Buscar perona por ID
    public Persona findPersona(Long id);
    
}
