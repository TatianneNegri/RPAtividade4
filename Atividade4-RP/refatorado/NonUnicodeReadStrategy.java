package refatorado;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Concrete Strategy para ler os arquivos sem caracteres do Unicode.
 */
class NonUnicodeReadStrategy implements ReadStrategy {

    @Override
    public String read(File file) throws IOException {
        try (FileInputStream i = new FileInputStream(file)) {
            StringBuilder output = new StringBuilder();
            int data;
            while ((data = i.read()) > 0) {
                if (data < 0x80) {
                    output.append((char) data);
                }
            }
            return output.toString();
        }
    }
}
