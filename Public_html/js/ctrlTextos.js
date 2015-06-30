/* Copyright 2014 Ricardo Armando Machorro Reyes.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License. */
"use strict";
var forma = document.getElementById("forma"),
    campos = ["nombre", "secreto", "navegador", "email", "usuario", "url",
      "telefono", "buscar", "verso"],
    salidas = ["salidaNombre", "salidaSecreto", "salidaNavegador", "salidaEmail",
      "salidaUsuario", "salidaUrl", "salidaTelefono", "salidaBuscar", "salidaVerso"];
forma.addEventListener("submit", procesa, false);
function procesa() {
  for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
  var nombre = forma["nombre"].value;
  forma["nombre"].value = "Hola " + nombre;
  forma["secreto"].value = "";
}