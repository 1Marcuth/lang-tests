use actix_web::{ HttpServer, App };

fn main() {
    let api = HttpServer::new( || {
        App::new()
    });
    let port = 8080;
    
    api.bind(format!("localhost:{}", port))
        .exect("> [server-error] Failed to connect");

    println!("> [server] Listening on http://localhost:{}", port);
}
