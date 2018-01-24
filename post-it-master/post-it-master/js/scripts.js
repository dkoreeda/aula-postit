console.log("initialize");

const notes = [];

const add = (title, description, form) => {
    console.log("title: ", title);
    console.log("description: ", description);

    //criar uma variavel nota
    const note = {
        title: title.value,
        description: description.value
    };

    //add nota dentro da lista
    notes.push(note);

    addNoteIntoList(notes);

    //limpar formulario
    form.reset();
}

notes.forEach(note => {
    console.log(note.title);
})


const addNoteIntoList = (notes) => {
    console.log(notes);

    let content = "";

    notes.forEach((note, index) => {
        console.log("aqui");
        content += `<form class="note">
                <input class="note__title" type="text" name="title" placeholder="Título" autofocus="" value=${note.title}>
                <textarea class="note__body" name="body" rows="5" placeholder="Criar uma nota...">${note.description}</textarea>
                <button class="note__control" type="button" onclick="edit(this.form.title, this.form.body, this.form, ${index})">
                    Editar
                </button>
                <button class="note__control" type="button" onclick="remove(${index})">
                    Excluir
                </button>
            </form>`
    })

    document.querySelector(".notes").innerHTML = content;
}

const edit = (title, body, form, index) => {
    console.log(title.value);
   
    notes.find((note, i) => {
        if(index === i) {
            notes[i].title = title.value;
            notes[i].description = body.value;
        }
        addNoteIntoList(notes);
    });

}

const remove = (index) => {
    notes.find((note, i) => {
        console.log(i);
        console.log(index);
        if(index === i) {
            notes.splice(i);
        }
        addNoteIntoList(notes);
    });
}