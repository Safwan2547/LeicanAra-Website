function Watcher() {
    const observeHandler = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.id);
            }
        });
    };
    
    let observer = new IntersectionObserver(observeHandler);
    
    let els = document.querySelectora("watcher");
    
    els.forEach((el) => {
        observer.observe(el);
    });
}

export default Watcher;
