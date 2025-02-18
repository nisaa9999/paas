function getSurat() {
    fetch("https://equran.id/api/surat")
    .then(response => response.json())
    .then(response => {
        let cardSurat = '';  

        response.forEach(surat => {
            cardSurat += 
            `<div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card mb-3 card-surat" data-bs-toggle="modal" data-bs-target="#surahModal" data-nomorsurat="${surat.nomor}">
                    <div class="card-body">
                        <h5 class="card-title">${surat.nomor}. ${surat.nama_latin}</h5>
                        <h3 class="card-subtitle mb-2 text-muted text-end">${surat.nama}</h3>
                        <p class="card-text text-end">${surat.arti}</p>
                    </div>
                </div>
            </div>`;
        });

        const listSurat = document.querySelector('.card-surat-list');
        if (listSurat) {  
            listSurat.innerHTML = cardSurat;
        } else {
            console.error("Elemen .card-surat-list tidak ditemukan.");
        }

        // Add event listener to each card to fetch and display Surah details in modal
        document.querySelectorAll('.card-surat').forEach(card => {
            card.addEventListener('click', function() {
                const nomorsurat = this.getAttribute('data-nomorsurat');
                fetchSurahDetails(nomorsurat);
            });
        });

        console.log(response);  
    })
    .catch(error => {
        console.error("Terjadi kesalahan saat mengambil data surat:", error);
    });
}

getSurat();

