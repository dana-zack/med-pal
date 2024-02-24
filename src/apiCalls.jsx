export function getMeds() {
  return fetch('https://rxnav.nlm.nih.gov/REST/Prescribe/drugs.json?name=spironolactone')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to retrieve medication data. Try again soon!')
      }
    })
}