function bitCount(x) {	
	x = x - ((x >>> 1) & 0x55555555);
	x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
	return ((((x + (x >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24);
}
function bitScan(x){	
	bits = [];	
    while (x) {
        var minBit = x & -x; // isolate least significant bit
        bits.push(MASK_TO_POS[minBit>>>0]);
		x &= x-1;
	}	
	return bits;
}
