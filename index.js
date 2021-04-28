function shadowizard_images(properties) {
    var allImages = document.querySelectorAll('.shadowizard')
    if (properties.shadow_type === "high") {
        properties.shadow_type = '5px'
    } else {
        properties.shadow_type = '16px'
    }
    allImages.forEach(element => {
        element.style.boxShadow = `11px 11px ${properties.shadow_type} 2px rgba(0,0,0,0.15)`;
        if (properties.padding) {
            element.style.padding = `1.1em`;
        }
    });
}
module.exports.shadowizard_images = shadowizard_images
