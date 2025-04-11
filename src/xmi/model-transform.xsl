<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/" mode="model">
    Model detected:
    <xsl:value-of select="//*[contains(@*[local-name()='type'], 'Model')]/@name"/>
    <!-- Your full model transformation logic here -->
  </xsl:template>
</xsl:stylesheet>
