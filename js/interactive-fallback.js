// Fallback-Skript für interaktive Komponenten
window.onload = function() {
  // Prüfen, ob die Vue-Komponenten geladen wurden
  setTimeout(function() {
    // Suche nach Counter-Containern
    const counterContainers = document.querySelectorAll('.counter-container');
    
    // Wenn keine Container gefunden wurden, erstelle einfachen JavaScript-Counter als Fallback
    if (counterContainers.length === 0) {
      console.log('Keine Vue-Counter gefunden, erstelle JavaScript-Fallback');
      createJSCounter();
    } else {
      console.log('Vue-Counter gefunden, kein Fallback nötig');
    }
  }, 1000);
  
  // Funktion zum Erstellen eines einfachen JavaScript-Counters
  function createJSCounter() {
    // Suche nach dem Counter-Bereich in der Markdown-Datei
    const counterSections = document.querySelectorAll('h2');
    let counterSection = null;
    
    for (let i = 0; i < counterSections.length; i++) {
      if (counterSections[i].textContent.includes('Interaktive Demo')) {
        counterSection = counterSections[i];
        break;
      }
    }
    
    if (!counterSection) return;
    
    // Erstelle Counter-Container
    const counterContainer = document.createElement('div');
    counterContainer.className = 'js-counter-container';
    counterContainer.style.cssText = 'margin: 20px 0; padding: 15px; border: 1px solid #555; border-radius: 8px; background-color: #2a2a2a; text-align: center;';
    
    // Counter-Wert
    let count = 0;
    
    // Erstelle UI
    const counterDisplay = document.createElement('p');
    counterDisplay.style.cssText = 'font-size: 1.2rem; margin-bottom: 12px; color: #fff;';
    counterDisplay.innerHTML = 'Aktuelle Zahl: <span class="js-counter-value" style="font-weight: bold; font-size: 1.5rem; color: #42b883; background-color: rgba(0, 0, 0, 0.2); padding: 3px 10px; border-radius: 4px; margin-left: 5px;">' + count + '</span>';
    counterContainer.appendChild(counterDisplay);
    
    // Button-Container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;';
    
    // Erstelle Buttons
    const createButton = (text, action, isReset = false) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.style.cssText = 'padding: 8px 16px; background-color: ' + (isReset ? '#e74c3c' : '#3498db') + '; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;';
      button.addEventListener('click', action);
      return button;
    };
    
    // Buttons hinzufügen
    buttonContainer.appendChild(createButton('Erhöhen', () => {
      count++;
      updateCounter();
    }));
    
    buttonContainer.appendChild(createButton('Verringern', () => {
      count--;
      updateCounter();
    }));
    
    buttonContainer.appendChild(createButton('Zurücksetzen', () => {
      count = 0;
      updateCounter();
    }, true));
    
    counterContainer.appendChild(buttonContainer);
    
    // Füge den Counter nach der Überschrift ein
    counterSection.insertAdjacentElement('afterend', counterContainer);
    
    // Update-Funktion
    function updateCounter() {
      const valueDisplay = counterContainer.querySelector('.js-counter-value');
      if (valueDisplay) {
        valueDisplay.textContent = count;
      }
    }
  }
};