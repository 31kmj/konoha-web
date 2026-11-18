// ID | 일본어 | 읽기 | 로마자 | 한국어 | 예문 | 예문 로마자 | 예문 한국어
export function vocabularyRows(scene, text) {
  return text.trim().split('\n').map(line => {
    const fields = line.trim().split('|');
    if (fields.length !== 8 || fields.some(field => !field)) {
      throw new Error('Incomplete vocabulary entry in ' + scene + ': ' + line);
    }
    const [slug, ja, reading, romaji, ko, sentence, pronunciation, translation] = fields;
    return {
      id: 'vocab-' + scene + '-' + slug,
      scene, ja, reading, romaji, ko,
      example: [sentence, pronunciation, translation]
    };
  });
}
