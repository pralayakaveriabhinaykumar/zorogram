// === Filtering Trip Sections ===  div changing in search
    const filterLinks = document.querySelectorAll(".trip-filter a");
    const filters = document.querySelectorAll(".filter");

    if (filterLinks.length > 0 && filters.length > 0) {
        filterLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                let targetId = this.getAttribute("href").substring(1);
                filters.forEach(filter => filter.style.display = "none");

                let targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = "block";
                }
            });
        });

        filters.forEach(filter => filter.style.display = "none");
        document.getElementById("destination").style.display = "block";
    }

// underlining the ul elmenets 
    filterLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
    
            // Remove underline from all
            filterLinks.forEach(l => l.classList.remove("active-filter"));
            this.classList.add("active-filter");
    
            // Hide all filter blocks
            filters.forEach(filter => filter.style.display = "none");
    
            // Show selected one
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "flex";
            }
        });
    });
    