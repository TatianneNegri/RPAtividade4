package refatorado;

import java.io.File;
import java.io.IOException;

/**
 * Strategy interface para leitura dos arquivos.
 */
interface ReadStrategy {
    String read(File file) throws IOException;
}