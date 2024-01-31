import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    password: '',
    email: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données à l'API
    fetch('http://localhost:3000/postuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Réponse de l\'API:', data);
        // Effectuer les actions supplémentaires après l'envoi des données
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        // Gérer l'erreur d'envoi des données
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Prénom:
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Statut:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Sélectionner un statut</option>
          <option value="admin">Admin</option>
          <option value="client">Client</option>
        </select>
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default UserForm;