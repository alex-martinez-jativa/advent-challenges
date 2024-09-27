function createChristmasTree(ornaments, height) {
  let tree = '';
  
  for (let i = 1; i <= height; i++) {
    let part = '';
    
    for (let j = 0; j < i; j++) {
      part += ' ' + ornaments[j % ornaments.length];
    }
    
    // Añadir espacios a la izquierda para centrar
    let spaces = ' '.repeat(height - i);
    
    tree += spaces + part + '\n'; // Añadir salto de línea para cada nivel
  }
  
  return tree + '|' + '\n';
}

const ornaments = ['*', '@', '#'];
const height = 4;
const tree = createChristmasTree(ornaments, height);
console.log(tree);