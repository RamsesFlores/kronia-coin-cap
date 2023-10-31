export interface AssetHistory {
    data:      Datum[];
    timestamp: number;
}

export interface Datum {
    priceUsd:          string;
    time:              number;
    circulatingSupply: string;
    date:              Date;
}
