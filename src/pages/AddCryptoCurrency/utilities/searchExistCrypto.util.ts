interface CriptosSearch {
  name: string;
  symbol: string;
}

const searchExistCrypto = (criptos: CriptosSearch[], dataOfInterest: string) =>
  criptos.some(
    crypto =>
      crypto.name.toLocaleLowerCase() === dataOfInterest.toLocaleLowerCase() ||
      crypto.symbol.toLocaleLowerCase() === dataOfInterest.toLocaleLowerCase(),
  );

export default searchExistCrypto;
