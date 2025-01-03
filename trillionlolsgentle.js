import org.yaml.snakeyaml.DumperOptions;
import org.yaml.snakeyaml.Yaml;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class TrillionLols {
    public static void main(String[] args) {
        // Set Dumper options to control the YAML flow style
        DumperOptions options = new DumperOptions();
        options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
        Yaml yaml = new Yaml(options);

        // Create a list of "LOL" entries to be written
        List<String> trillionLols = new ArrayList<>();
        
        // Limit the number of iterations for the demo purpose. (In practice, replace 1000000 with 1 trillion)
        int totalLols = 1000000000000L;  // This is 1 trillion

        // Write in smaller batches to avoid memory overload
        try (FileWriter writer = new FileWriter("trillion_lols.yaml", true)) {
            for (long i = 0; i < totalLols; i++) {
                trillionLols.add("LOL");

                // Write in small chunks (e.g., 1000 "LOL"s at a time)
                if (trillionLols.size() >= 1000) {
                    yaml.dump(trillionLols, writer);
                    System.out.println("Written " + i + " entries...");
                    trillionLols.clear(); // Clear the list for the next batch
                }
            }

            // Write any remaining "LOL"s that didn't fill the final batch
            if (!trillionLols.isEmpty()) {
                yaml.dump(trillionLols, writer);
                System.out.println("Written remaining " + trillionLols.size() + " entries...");
            }

            System.out.println("Done!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
