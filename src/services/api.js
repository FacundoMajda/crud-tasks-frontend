export async function getAllTasks() {
  const response = await fetch("http://localhost:3000/api/tasks");
  if (!response.ok) {
    throw new Error("😭 ¡No se pudo obtener las tareas!");
  }
  return response.json();
}

export async function createTask(task) {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("😭 ¡No se pudo crear la tarea!");
  }
  return response.json();
}

export async function updateTask(id, body) {
  const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("😭 ¡No se pudo actualizar la tarea!");
  }
  return response.json();
}

export async function deleteTask(taskId) {
  const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("😭 ¡No se pudo eliminar la tarea!");
  }
  return response.json();
}
