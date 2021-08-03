function distanceOfPoints(x1, y1, x2, y2){
    let dx = x2 - x1;
    let dy = y2 - y1;

    return Math.sqrt(dx * dx + dy * dy);
}

function isCircleColliding(c1, c2){
    let dist = distanceOfPoints(c1.x, c1.y, c2.x, c2.y);

    if(dist <= c1.radius + c2.radius)
        return true;
    else 
        return false;    
}